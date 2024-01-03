import { FaServer } from "react-icons/fa6"
import { IoIosSearch } from "react-icons/io"
import { FaCirclePlus } from "react-icons/fa6"
import { RiDeleteBin6Line } from "react-icons/ri"
import { FiEdit2 } from "react-icons/fi"
import { GoBell } from "react-icons/go"

import "../styles.css"

const WeaverPage = () => {
  return (
    <div className="weaver-page">
      <nav className="weaver-nav">
        <div>
          <FaServer className="weaver-icon" />
          <p className="weaver-title">IOT Sensor Management</p>
        </div>
        <div className="weaver-btns">
          <div>
            <label htmlFor="weaverInput">
              <IoIosSearch className="search-icon" />
            </label>
            <input
              id="weaverInput"
              type="search"
              className="weaver-input"
              placeholder="Search"
            />
          </div>
          <button>
            <FaCirclePlus className="plus-icon" />
            Add Device
          </button>
        </div>
      </nav>
      <h3 className="active-heading">Active Devices (25)</h3>
      <div className="devices-container">
        <div className="device-card">
          <img src="https://picsum.photos/350/200" alt="device" />
          <div className="device-info">
            <div>
              <h4>Device name</h4>
              <div>
                <button>
                  <RiDeleteBin6Line />
                </button>
                <button>
                  <FiEdit2 />
                </button>
              </div>
            </div>
            <p className="status">• Inactive</p>
            <div>
              <p className="location">Location</p>
              <div>
                <button>
                  <GoBell />
                </button>
                <div className="cl-toggle-switch">
                  <label className="cl-switch">
                    <input type="checkbox" />
                    <span></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="device-card">
          <img src="https://picsum.photos/350/200" alt="device" />
          <div className="device-info">
            <div>
              <h4>Device name</h4>
              <div>
                <button>
                  <RiDeleteBin6Line />
                </button>
                <button>
                  <FiEdit2 />
                </button>
              </div>
            </div>
            <p className="status">• Inactive</p>
            <div>
              <p className="location">Location</p>
              <div>
                <button>
                  <GoBell />
                </button>
                <div className="cl-toggle-switch">
                  <label className="cl-switch">
                    <input type="checkbox" />
                    <span></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="device-card">
          <img src="https://picsum.photos/350/200" alt="device" />
          <div className="device-info">
            <div>
              <h4>Device name</h4>
              <div>
                <button>
                  <RiDeleteBin6Line />
                </button>
                <button>
                  <FiEdit2 />
                </button>
              </div>
            </div>
            <p className="status">• Inactive</p>
            <div>
              <p className="location">Location</p>
              <div>
                <button>
                  <GoBell />
                </button>
                <div className="cl-toggle-switch">
                  <label className="cl-switch">
                    <input type="checkbox" />
                    <span></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="device-card">
          <img src="https://picsum.photos/350/200" alt="device" />
          <div className="device-info">
            <div>
              <h4>Device name</h4>
              <div>
                <button>
                  <RiDeleteBin6Line />
                </button>
                <button>
                  <FiEdit2 />
                </button>
              </div>
            </div>
            <p className="status">• Inactive</p>
            <div>
              <p className="location">Location</p>
              <div>
                <button>
                  <GoBell />
                </button>
                <div className="cl-toggle-switch">
                  <label className="cl-switch">
                    <input type="checkbox" />
                    <span></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeaverPage
